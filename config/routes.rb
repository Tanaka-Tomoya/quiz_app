Rails.application.routes.draw do
  root 'home#index'
  get '/answer/:id', to: 'home#answer'
  get 'create', to: 'home#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/auth/registrations'
      }
  end
  
  namespace :api, {format: 'json'} do
    namespace :v1 do
      resources :four_choice_questions
    end
  end
end
