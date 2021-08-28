(ns myapp.subnav2
  (:require ["react-native" :as rn]
            [applied-science.js-interop :as j]
            [helix.core :refer [defnc $]]))

(defnc TabB [_] {:helix/features {:fast-refresh true}}
  ($ rn/View {:style (j/lit {:flex 1, :alignItems "center", :justifyContent "center"})}
     ($ rn/Text {:style (j/lit {:fontSize 36})}
        "Tab B")))
