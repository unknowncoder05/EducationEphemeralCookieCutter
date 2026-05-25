from pm_policy.apps import PMPolicyConfig


def test_app_config_name():
    assert PMPolicyConfig.name == "pm_policy"
