import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { useTranslation } from 'react-i18next';
import { Breadcrumbs } from '../components/shared';

export const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="min-h-screen bg-secondary-50 dark:bg-secondary-900 transition-colors">
      {/* Header */}
      <div className="bg-white dark:bg-secondary-800 border-b border-secondary-200 dark:border-secondary-700 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-lg transition-colors text-secondary-600 dark:text-secondary-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h1 className="text-xl font-semibold text-secondary-900 dark:text-white">{t('settings.title')}</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs />
        
        {/* Profile Section */}
        <div className="pm-surface-panel rounded-lg shadow-sm mb-6">
          <div className="px-6 py-4 border-b border-[var(--border-subtle)]">
            <h2 className="text-lg font-semibold pm-text-strong">{t('settings.profile.title')}</h2>
          </div>
          <div className="px-6 py-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary-700 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
                {user?.email?.charAt(0).toUpperCase() || 'U'}
              </div>
              <div>
                <p className="text-lg font-medium pm-text-strong">
                  {user?.first_name} {user?.last_name}
                </p>
                <p className="text-sm pm-text-muted">{user?.email}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SettingsPage;
