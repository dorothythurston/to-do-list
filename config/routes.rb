Rails.application.routes.draw do
    root 'homes#show'

    resources :lists, only: [:new, :create, :show, :edit, :update, :destroy] do
    	resources :items, only: [:new, :create, :show, :edit, :update, :destroy]
    end
    
end
