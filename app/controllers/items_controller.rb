class ItemsController < ApplicationController
	def new
		@item = Item.new
		@list = List.find(params[:list_id])
	end

	def create
    @list = List.find(params[:list_id])
    @item = @list.items.create(item_params)
	    if @item.save
	      redirect_to @list
	    else
	     render :new
	    end
  	end

private

  def item_params
    params.require(:item).permit(
      :name,
      :url,
      :description,
      :list_id
    )
  end
end