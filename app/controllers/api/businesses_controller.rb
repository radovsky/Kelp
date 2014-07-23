module Api
  class BusinessesController < ApplicationController
    def create
      @business = Business.new(business_params)
      if @business.save
        render json: @business
      else
        render json: @business.errors.full_messages, 
        status: :unprocessable_entity
      end
    end
    
    def update
      @business = Business.find(params[:id])
      if @business.update_attributes(business_params)
        render json: @business
      else
        render json: @business.errors.full_messages, 
        status: :unprocessable_entity
      end
    end
    
    def destroy
      @business = Business.find(params[:id])
      @business.try(:destroy)
      render json: {}
    end
    
    def index
      @businesses = Business.all
      render json: @businesses
    end
    
    def show
      @business = Business.find(params[:id])
      render json: @business
    end
    
    private
    def business_params
      params.require(
        :business
      ).permit(
        :name, 
        :location, 
        :num_stars, 
        :price_range, 
        :description, 
        :category
      )
    end
  end
end