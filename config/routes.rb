Rails.application.routes.draw do
  
  root to: 'static_pages#root'
  
  get '/siginin-guest' => 'sessions#sign_in_guest', as: :sign_in_guest
  
  resource :session, only: [:create, :destroy]
  resources :users, except: [:index]
  
  namespace :api, defaults: { format: :json } do
    resources :businesses, except: [:new, :edit]
    resources :reviews, except: [:index, :new, :edit]
  end
  
end
