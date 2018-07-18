class Api::V1::FourChoiceQuestionsController < ApplicationController
	before_action :set_question, only: [
    :show, :update, :destroy
  ]

  def index
    render json: FourChoiceQuestion.order(created_at: :desc).all
  end

  def create
    @four_choice_question = FourChoiceQuestion.create!(question_params)
    render json: @four_choice_question
  end

  def show
    render json: @four_choice_question
  end

  def update
    @four_choice_question.update(question_params)
    render json: @four_choice_question
  end

  def destroy
    @four_choice_question.destroy
    head :no_content
  end

  private

  def question_params
    params.permit(:title, :a, :b, :c, :d, :answer)
  end

  def set_question
    @four_choice_question = FourChoiceQuestion.find(params[:id])
  end
end
