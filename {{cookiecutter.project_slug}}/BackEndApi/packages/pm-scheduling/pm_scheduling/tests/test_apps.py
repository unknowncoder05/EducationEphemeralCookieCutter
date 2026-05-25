from pm_scheduling.apps import PMSchedulingConfig


def test_app_config_name():
    assert PMSchedulingConfig.name == "pm_scheduling"
