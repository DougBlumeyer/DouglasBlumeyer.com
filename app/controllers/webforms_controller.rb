class WebformsController < ApplicationController
  def create
    @webform = Webform.create(webform_params)
    # @webform = Webform.build(webform_params)

    AuthMailer.webform(
      webform_params[:visitor],
      webform_params[:subject],
      webform_params[:message]
    ).deliver

    # flash[:notices] = ["Thank you for the note. I'll get back to you ASAP."]
    # flash.now[:notices] = ["Thank you for the note. I'll get back to you ASAP."]
    render :show
    # redirect_to :root
  end

  def show
    render :show
  end

  private

  def webform_params
    params.require(:webform).permit(:visitor, :subject, :message)
  end
end
