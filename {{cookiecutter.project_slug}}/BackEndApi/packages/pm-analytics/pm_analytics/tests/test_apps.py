from pm_analytics.apps import PMAnalyticsConfig


def test_app_config_name():
    assert PMAnalyticsConfig.name == "pm_analytics"
