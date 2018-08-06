Rails.application.config.middleware.use OmniAuth::Builder do
   OAUTH_CONFIG = YAML.load_file("#{Rails.root}/config/omniauth.yml")[Rails.env].symbolize_keys!
   provider :facebook, OAUTH_CONFIG[:facebook]['252835098874341'], OAUTH_CONFIG[:facebook]['f17109331bf66f8683a5ac3b1b4cbc5c']

end
