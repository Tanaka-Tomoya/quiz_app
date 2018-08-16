Rails.application.routes.draw do
  root 'home#index'
  get '/answer/:id/:id', to: 'home#answer'
  get '/answer/:id/result', to: 'home#result'
  get 'create', to: 'home#create'
  get 'signup', to: 'home#signup'
  get 'signin', to: 'home#signin'
  get 'information', to: 'home#information'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/auth/registrations'
      }
  end

  namespace :api, {format: 'json'} do
    namespace :v1 do
      resources :four_choice_questions, :questions, :users
    end
  end

end
