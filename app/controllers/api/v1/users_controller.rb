class Api::V1::UsersController < ApplicationController
	before_action :set_user, only: [
		:show, :update, :destroy
	]

  def index
    render json: User.order(created_at: :desc).all
  end

  def create
    @user = User.create!(user_params)
    render json: @user
  end

  def show
    render json: @user.to_json(:include => [:questions, :questions =>{:include => [:four_choice_questions] }])
  end

  def update
    @user.update(user_params)
    render json: @user
  end

  def destroy
    @user.destroy
    head :no_content
  end

  private

	def user_params
		params.permit(:name, :nickname, :email, :password)
	end

	def set_user
		@user = User.find(params[:id])
	end
end
