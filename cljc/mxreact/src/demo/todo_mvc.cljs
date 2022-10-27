(ns demo.todo-mvc
  (:require
    [clojure.string :as str]
    [tiltontec.cell.core :refer-macros [cF cFn cFonce] :refer [cI]]
    [tiltontec.model.core :refer [with-par matrix mget mset! mswap!] :as md]
    [react]
    [mxreact.mxreact :as mxr :refer [input h1 header div p span $ mk fmu with-props]]))

;; <div>
;					<header className="header">
;						<h1>todos</h1>
;						<input
;							className="new-todo"
;							placeholder="What needs to be done?"
;							value={this.state.newTodo}
;							onKeyDown={this.handleNewTodoKeyDown}
;							onChange={this.handleChange}
;							autoFocus={true}
;						/>
;					</header>
;					{main}
;					{footer}
;				</div>



(defn demo []
  (md/make :mxreact/mxReactApp
    :rx-dom
    (cFonce (with-par me
              (div {}{}
                (header {}
                  {:className "header"}
                  (h1 {}{} "todos")
                  (input {}
                    {:className "new-todo"
                     :placeholder "What needs to be done?"
                     ;:value={this.state.newTodo}
                     ;onKeyDown={this.handleNewTodoKeyDown}
                     ;onChange={this.handleChange}
                     ;autoFocus={true}
                     })))))

    ))