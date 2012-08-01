Rails3BootstrapDeviseCancan::Application.routes.draw do
  resources :stats

  resources :tasks

  resources :bugs

  resources :abouts

  resources :meeting2s

  resources :packages

  resources :meetings

  authenticated :user do
    root :to => 'home#index'
  end
  root :to => "home#index"
  devise_for :users
  resources :users, :only => [:show, :index]
end
