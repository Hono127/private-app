require "test_helper"

class StaticControllerTest < ActionDispatch::IntegrationTest
  test "should get test" do
    get static_test_url
    assert_response :success
  end
end
