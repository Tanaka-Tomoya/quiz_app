Rails.application.config.to_prepare do
  Devise::OmniauthCallbacksController.class_eval do
    def failure
      # 認証をキャンセルした場合
      render json: { message: "Login failed." }, status: 401
    end
  end
end
