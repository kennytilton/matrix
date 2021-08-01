(ns myapp.mxr-gen)

(defmacro with-mxr [& body]
  `(helix.core/fnc []
     (let [hook# (helix.hooks/use-state 0)]
       (prn :recording-hook)
       (myapp.mxreact/set-state-record ~'me (second hook#))
       ~@body)))

#_
(defmacro with-mxr [& body]
  `(hx/fnc []
     (let [[_ set-state#] (hooks/use-state 0)]
       (rn/set-state-record ~'me set-state#)
       ~@body)))

#_
(defmacro with-mxr [& body]
  `(helix.core/fnc []
     (let [[_ hook#] (helix.hooks/use-state 0)]
       (prn :recording-hook)
       (myapp.mxreact/set-state-record ~'me hook#)
       ~@body)))
