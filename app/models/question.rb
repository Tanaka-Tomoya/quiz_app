class Question < ApplicationRecord
	belongs_to :user, optional: true
	has_many :four_choice_questions
end
