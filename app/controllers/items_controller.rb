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

  def show
    @item = Item.find(params[:id])
    @list = List.find(params[:list_id])
  end

  def edit
    @item = Item.find(params[:id])
    @list = List.find(params[:list_id])
  end

  def update
    @list = List.find(params[:list_id])
    @item = Item.find(params[:id])
    if @item.update(item_params)
    redirect_to @list
    else
      render :edit
    end

  end

  def destroy
    @list = List.find(params[:list_id])
    @item = Item.find(params[:id])
    @item.destroy
    redirect_to @list
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
