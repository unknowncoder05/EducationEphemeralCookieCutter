from pm_progress.apps import PMProgressConfig


def test_app_config_name():
    assert PMProgressConfig.name == "pm_progress"
