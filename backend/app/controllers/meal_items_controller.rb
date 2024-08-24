class MealItemsController < ApplicationController
  # CSRFトークンの検証を無効にする
  skip_before_action :verify_authenticity_token
  
  before_action :set_meal_item, only: [:show, :update, :destroy]

  # GET /meal_items
  def index
    @meal_items = MealItem.all
    render json: @meal_items
  end

  # GET /meal_items/:id
  def show
    render json: @meal_item
  end

  # POST /meal_items
  def create
    @meal_item = MealItem.new(meal_item_params)
    if @meal_item.save
      render json: @meal_item, status: :created
    else
      render json: @meal_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /meal_items/:id
  def update
    if @meal_item.update(meal_item_params)
      render json: @meal_item
    else
      render json: @meal_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /meal_items/:id
  def destroy
    @meal_item.destroy
  end

  private

  def set_meal_item
    @meal_item = MealItem.find(params[:id])
  end

  def meal_item_params
    params.require(:meal_item).permit(:user_id, :meal_type, :meal_date, :total_calories, :total_protein, :total_fat, :total_carbohydrates)
  end
end