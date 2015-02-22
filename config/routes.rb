Rails.application.routes.draw do
    root 'homes#show'

    resources :lists, only: [:create, :show, :update, :destroy] do
    	resources :items, only: [:create, :show, :update, :destroy]
    end

end
