module Api
  class ReviewsController < ApplicationController
    def create
      @review = Review.new(review_params)
      
      @review.user_id = current_user.id
      business = Business.find(params[:id])
      @review.business_id = business.id
      
      if @review.save
        render json: @review
      else
        render json: @review.errors.full_messages,
                     status: :unprocessable_entity
      end
    end
    
    def update
      @review = Review.find(params[:id])
      if @review.update_attributes(review_params)
        render json: @review
      else
        render json: @review.errors.full_messages,
                     status: :unprocessable_entity
      end
    end
    
    def destroy
      @review = Review.find(params[:id])
      @review.destroy
      render json: {}
    end
    
    def index
      @reviews = Review.all
      render json: @reviews
    end
    
    def show
      @review = Review.find(params[:id])
      render json: @review
    end
    
    private
    def review_params
      params.require(:review).permit(:num_stars, :description)
    end
  end
end