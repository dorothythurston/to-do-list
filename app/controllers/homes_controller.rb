class HomesController < ApplicationController
  def show
	@lists = List.all.order(updated_at: :desc)
	@list = List.new
  end
end
