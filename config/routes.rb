Rails.application.routes.draw do
  root to: "root#root"
  resources :othoundsto, only: [:index]
  resources :dougstooth, only: [:index]
  resources :thousoondth, only: [:index]
  resources :webforms, only: [:create, :show], defaults: { format: :json }
end
