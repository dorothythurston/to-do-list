class HomesController < ApplicationController
	def show
		@lists = List.all
	end
end