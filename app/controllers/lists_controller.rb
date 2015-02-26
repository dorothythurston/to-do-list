class ListsController < ApplicationController
  respond_to :html, :js

	def show
    @list = List.find(params[:id])
    @items = @list.items.order(created_at: :desc)
    @new_item = Item.new
  end

  def create
    @list = List.create(list_params)
    render @list
  end

  def update
    @list = List.find(params[:id])
    if @list
			@list.update_attributes(list_params)
		end
    render :nothing => true
  end

  def destroy
    list = List.find(params[:id])
    list.destroy
    redirect_to root_path
  end

  private
  def list_params
      params.require(:list).permit(
        :name,
      )
    end
end
