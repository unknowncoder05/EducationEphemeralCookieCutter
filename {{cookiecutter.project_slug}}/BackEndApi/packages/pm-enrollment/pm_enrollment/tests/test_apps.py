from pm_enrollment.apps import PMEnrollmentConfig


def test_app_config_name():
    assert PMEnrollmentConfig.name == "pm_enrollment"
