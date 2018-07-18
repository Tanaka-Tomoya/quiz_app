require 'test_helper'

class HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get home_index_url
    assert_response :success
  end

  test "should get answer" do
    get home_answer_url
    assert_response :success
  end

  test "should get create" do
    get home_create_url
    assert_response :success
  end

end
