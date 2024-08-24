Rails.application.routes.draw do
  resources :food_items
  resources :meal_items
  resources :meal_detail_items
  resources :progress_items
  resources :users
  post 'login', to: 'sessions#create'
end