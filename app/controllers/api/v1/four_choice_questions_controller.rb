class Api::V1::FourChoiceQuestionsController < ApplicationController
	before_action :set_four_choice_question, only: [
    :show, :update, :destroy
  ]

  def index
    render json: FourChoiceQuestion.order(created_at: :desc).all
  end

  def create
    @four_choice = FourChoiceQuestion.create!(four_choice_question_params)
		parent_question = Question.order(created_at: :desc).first
		id = parent_question.id
		@four_choice.update_attributes(question_id: id )
    render json: @four_choice
  end

  def show
    render json: @four_choice
  end

  def update
    @four_choice.update(four_choice_question_params)
    render json: @four_choice
  end

  def destroy
    @four_choice.destroy
    head :no_content
  end

  private

  def four_choice_question_params
    params.require(:four_choice_question).permit(:a, :b, :c, :d, :answer, :question_title, :question_id)
  end

  def set_four_choice_question
    @four_choice = FourChoiceQuestion.find(params[:id])
  end
end
