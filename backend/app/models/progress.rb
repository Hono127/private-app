# app/models/progress.rb
class Progress < ApplicationRecord
  belongs_to :user

  validates :measurement_date, presence: true
  validates :weight, presence: true
end