class ListsController < ApplicationController
  respond_to :html, :js

	def new
		@list = List.new
	end

	def show
    @list = List.find(params[:id])
    @items = @list.items.order(created_at: :desc)
  end

  def create
    @list = List.create(list_params)
    redirect_to list_path(@list)
  end

  def edit
    @list = List.find(params[:id])
  end

  def update
    @list = List.find(params[:id])
    if @list.update(list_params)
    redirect_to @list
    else
      render :edit
    end
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
