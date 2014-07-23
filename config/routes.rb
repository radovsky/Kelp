Rails.application.routes.draw do
  
  root to: "api/businesses#index"
  
  namespace :api, defaults: { format: :json } do
    resources :businesses, except: [:new, :edit]
  end
  
end
