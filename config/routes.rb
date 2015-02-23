Rails.application.routes.draw do
  root to: "root#root"

  resources :webforms, only: [:create]
end
