'use client';

import React from 'react';
import {
  ArrowLeftIcon,
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon as ChevronDownOutlineIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import {
  BoltIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon as ChevronDownSolidIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  LockClosedIcon,
  StarIcon,
  UserIcon,
} from '@heroicons/react/24/solid';

/** Tree-shaken icon map — do not use `import *` from @heroicons (pulls entire library). */
const outlineIcons = {
  ArrowLeftIcon,
  HomeIcon,
  ChevronDownIcon: ChevronDownOutlineIcon,
  ArrowTopRightOnSquareIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
} as const;

const solidIcons = {
  BoltIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon: ChevronDownSolidIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  LockClosedIcon,
  StarIcon,
  UserIcon,
} as const;

type OutlineIconName = keyof typeof outlineIcons;
type SolidIconName = keyof typeof solidIcons;

type IconVariant = 'outline' | 'solid';

interface IconProps {
  name: OutlineIconName | SolidIconName | (string & {});
  variant?: IconVariant;
  size?: number;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

function Icon({
  name,
  variant = 'outline',
  size = 24,
  className = '',
  onClick,
  disabled = false,
  ...props
}: IconProps) {
  const set = variant === 'solid' ? solidIcons : outlineIcons;
  const IconComponent = set[name as keyof typeof set] as
    | React.ComponentType<React.SVGProps<SVGSVGElement>>
    | undefined;

  if (!IconComponent) {
    return (
      <QuestionMarkCircleIcon
        width={size}
        height={size}
        className={`text-gray-400 ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        onClick={disabled ? undefined : onClick}
        {...props}
      />
    );
  }

  return (
    <IconComponent
      width={size}
      height={size}
      className={`${disabled ? 'opacity-50 cursor-not-allowed' : onClick ? 'cursor-pointer hover:opacity-80' : ''} ${className}`}
      onClick={disabled ? undefined : onClick}
      {...props}
    />
  );
}

export default Icon;
