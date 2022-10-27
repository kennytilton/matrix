import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;

public class CallbackB {

    /**
     * Demonstration of nested callbacks which then need to composes their responses together.
     * <p>
     * Various different approaches for composition can be done but eventually they end up relying upon
     * synchronization techniques such as the CountDownLatch used here or converge on callback design
     * changes similar to <a href="https://github.com/Netflix/RxJava">Rx</a>.
     */
    public static void run() throws Exception {
        final ExecutorService executor = new ThreadPoolExecutor(4, 4, 1, TimeUnit.MINUTES, new LinkedBlockingQueue<Runnable>());
        /* the following are used to synchronize and compose the asynchronous callbacks */
        final CountDownLatch latch = new CountDownLatch(3);
        final AtomicReference<String> f3Value = new AtomicReference<String>();
        final AtomicReference<Integer> f4Value = new AtomicReference<Integer>();
        final AtomicReference<Integer> f5Value = new AtomicReference<Integer>();

        try {
            // get f3 with dependent result from f1
            executor.execute(new CallToRemoteServiceA(new Callback<String>() {

                @Override
                public void call(String f1) {
                    executor.execute(new CallToRemoteServiceC(new Callback<String>() {

                        @Override
                        public void call(String f3) {
                            // we have f1 and f3 now need to compose with others
                            System.out.println("intermediate callback: " + f3 + " => " + ("f4 * f5"));
                            // set to thread-safe variable accessible by external scope 
                            f3Value.set(f3);
                            latch.countDown();
                        }

                    }, f1));
                }

            }));

            // get f4/f5 after dependency f2 completes 
            executor.execute(new CallToRemoteServiceB(new Callback<Integer>() {

                @Override
                public void call(Integer f2) {
                    executor.execute(new CallToRemoteServiceD(new Callback<Integer>() {

                        @Override
                        public void call(Integer f4) {
                            // we have f2 and f4 now need to compose with others
                            System.out.println("intermediate callback: f3" + " => " + (f4 + " * f5"));
                            // set to thread-safe variable accessible by external scope 
                            f4Value.set(f4);
                            latch.countDown();
                        }

                    }, f2));
                    executor.execute(new CallToRemoteServiceE(new Callback<Integer>() {

                        @Override
                        public void call(Integer f5) {
                            // we have f2 and f5 now need to compose with others
                            System.out.println("intermediate callback: f3" + " => " + ("f4 * " + f5));
                            // set to thread-safe variable accessible by external scope 
                            f5Value.set(f5);
                            latch.countDown();
                        }

                    }, f2));
                }

            }));

            /* we must wait for all callbacks to complete */
            latch.await();
            System.out.println(f3Value.get() + " => " + (f4Value.get() * f5Value.get()));
        } finally {
            executor.shutdownNow();
        }
    }

    public static void main(String[] args) {
        try {
            run();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static final class CallToRemoteServiceA implements Runnable {

        private final Callback<String> callback;

        private CallToRemoteServiceA(Callback<String> callback) {
            this.callback = callback;
        }

        @Override
        public void run() {
            // simulate fetching data from remote service
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            callback.call("responseA");
        }
    }

    private static final class CallToRemoteServiceB implements Runnable {

        private final Callback<Integer> callback;

        private CallToRemoteServiceB(Callback<Integer> callback) {
            this.callback = callback;
        }

        @Override
        public void run() {
            // simulate fetching data from remote service
            try {
                Thread.sleep(40);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            callback.call(100);
        }
    }

    private static final class CallToRemoteServiceC implements Runnable {

        private final Callback<String> callback;
        private final String dependencyFromA;

        private CallToRemoteServiceC(Callback<String> callback, String dependencyFromA) {
            this.callback = callback;
            this.dependencyFromA = dependencyFromA;
        }

        @Override
        public void run() {
            // simulate fetching data from remote service
            try {
                Thread.sleep(60);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            callback.call("responseB_" + dependencyFromA);
        }
    }

    private static final class CallToRemoteServiceD implements Runnable {

        private final Callback<Integer> callback;
        private final Integer dependencyFromB;

        private CallToRemoteServiceD(Callback<Integer> callback, Integer dependencyFromB) {
            this.callback = callback;
            this.dependencyFromB = dependencyFromB;
        }

        @Override
        public void run() {
            // simulate fetching data from remote service
            try {
                Thread.sleep(140);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            callback.call(40 + dependencyFromB);
        }
    }

    private static final class CallToRemoteServiceE implements Runnable {

        private final Callback<Integer> callback;
        private final Integer dependencyFromB;

        private CallToRemoteServiceE(Callback<Integer> callback, Integer dependencyFromB) {
            this.callback = callback;
            this.dependencyFromB = dependencyFromB;
        }

        @Override
        public void run() {
            // simulate fetching data from remote service
            try {
                Thread.sleep(55);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            callback.call(5000 + dependencyFromB);
        }
    }

    private static interface Callback<T> {
        public void call(T value);
    }
}