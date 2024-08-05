class MealDetailItemsController < ApplicationController
  # CSRFトークンの検証を無効にする
  skip_before_action :verify_authenticity_token
  
  before_action :set_meal_detail_item, only: [:show, :update, :destroy]

  # GET /meal_detail_items
  def index
    @meal_detail_items = MealDetailItem.all
    render json: @meal_detail_items
  end

  # GET /meal_detail_items/:id
  def show
    render json: @meal_detail_item
  end

  # POST /meal_detail_items
  def create
    @meal_detail_item = MealDetailItem.new(meal_detail_item_params)
    if @meal_detail_item.save
      render json: @meal_detail_item, status: :created
    else
      render json: @meal_detail_item.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /meal_detail_items/:id
  def update
    if @meal_detail_item.update(meal_detail_item_params)
      render json: @meal_detail_item
    else
      render json: @meal_detail_item.errors, status: :unprocessable_entity
    end
  end

  # DELETE /meal_detail_items/:id
  def destroy
    @meal_detail_item.destroy
  end

  private

  def set_meal_detail_item
    @meal_detail_item = MealDetailItem.find(params[:id])
  end

  def meal_detail_item_params
    params.require(:meal_detail_item).permit(:meal_item_id, :food_item_id, :quantity, :calories, :protein, :fat, :carbohydrates)
  end
end