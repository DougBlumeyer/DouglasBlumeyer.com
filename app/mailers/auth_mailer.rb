class AuthMailer < ActionMailer::Base
  default from: "mailer_satan@douglasblumeyer.com"

  def webform(visitor, subject, content)
    @content = content
    mail(
      to: "douglas.blumeyer@gmail.com",
      subject: "#{visitor}: #{subject}"
    )
  end

end
