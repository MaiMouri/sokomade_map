Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#index'
  # get '/index', to: 'pages#index'
end
