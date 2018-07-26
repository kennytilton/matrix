(ns mxweb.widget
  (:require
    [goog.events.Event :as event]

    [tiltontec.cell.core :refer-macros [cF cF+ cFn cF+n cFonce] :refer [cI]]

    [tiltontec.model.core
     :refer-macros [with-par]
     :refer [matrix mx-par <mget mset!> mswap!>
             fget mxi-find mxu-find-type
             kid-values-kids] :as md]

    [mxweb.gen
     :refer-macros [section header h1 input footer p a span label ul li div button br]
     :refer [make-tag dom-tag evt-tag]]))

(defn tag-checkbox
  ;; todo: test variants
  ([me id label-text initial-state attrs aux]
   (make-tag "div"
     (assoc attrs :id id)
     (merge {:on? (cI initial-state)}
            aux)
     (tiltontec.model.core/cFkids
       (input {:id                      (str id "box")
               :mxweb.html/type "checkbox"
               :onchange                (fn [e]
                                          (event/preventDefault e) ;; else browser messes with checked, which we handle
                                          (mswap!> me :on? #(not %)))
               :checked                 (cF (<mget (mx-par me) :on?))})

       (when label-text
         (label {:for     (str id "box")
                 ;; a bit ugly: handler below is not in kids rule of LABEL, so 'me' is the DIV.
                 :style "margin-left:0.5em"
                 :onclick (fn [e]
                            (event/preventDefault e)        ;; else browser messes with checked, which we handle
                            (mswap!> me :on? #(not %)))}
                label-text)))))

  ([me id label-text initial-state attrs]
   (tag-checkbox me id label-text initial-state attrs {}))

  ([me id label-text initial-state]
   (tag-checkbox me id label-text initial-state {:id id} {}))

  ([me id label-text]
   (tag-checkbox me id label-text false {:id id} {}))

  ([me id]
   (tag-checkbox me id nil false {:id id} {})))