class SessionsController < ApplicationController
  def new; end
  
  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if user
      debugger
      sign_in!(user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Username and/or password is invalid."]
      render :new
    end
  end
  
  def destroy
    sign_out!
    redirect_to new_session_url
  end
end
