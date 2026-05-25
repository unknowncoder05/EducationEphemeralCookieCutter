from pm_assessment.apps import PMAssessmentConfig


def test_app_config_name():
    assert PMAssessmentConfig.name == "pm_assessment"
