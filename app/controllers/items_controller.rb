class ItemsController < ApplicationController
  respond_to :html, :js

  def create
    @list = List.find(params[:list_id])
    @item = @list.items.create(item_params)
    render @item
    end

  def update
    @list = List.find(params[:list_id])
    @item = Item.find(params[:id])
    if @item
      @item.update_attributes(item_params)
    end
    render nothing: true
  end

  def destroy
    @list = List.find(params[:list_id])
    @item = Item.find(params[:id])
    @item.destroy
    render nothing: true
  end

private

  def item_params
    params.require(:item).permit(
      :name,
      :list_id
    )
  end
end
