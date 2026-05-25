from pm_cohorting.apps import PMCohortingConfig


def test_app_config_name():
    assert PMCohortingConfig.name == "pm_cohorting"
