class Api::V1::QuestionsController < ApplicationController
	before_action :set_question, only: [
		:show, :update, :destroy
	]

	def index
		render json: Question.order(created_at: :desc).all
	end

	def create
		@question = Question.create!(question_params)
		render json: @question
	end

	def show
		render json: @question.to_json(:include =>[:four_choice_questions])
	end

	def update
		@question.update(question_params)
		render json: @question
	end

	def destroy
		@question.destroy
		head :no_content
	end

	private

	def question_params
		params.require(:question).permit(:title, :user_id)
	end

	def set_question
		@question = Question.find(params[:id])
	end
end
