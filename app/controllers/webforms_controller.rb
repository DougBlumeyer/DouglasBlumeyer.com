class WebformsController < ApplicationController
  def create
    @webform = Webform.create(webform_params)

    AuthMailer.webform(
      webform_params[:visitor],
      webform_params[:subject],
      webform_params[:message]
    ).deliver

    render :show
  end

  def show
    render :show
  end

  private

  def webform_params
    params.require(:webform).permit(:visitor, :subject, :message)
  end
end
