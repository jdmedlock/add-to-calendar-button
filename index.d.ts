declare module 'add-to-calendar-button' {
  export function atcb_init(): void;
  export function atcb_action(
    config: {
      identifier?: string;
      name: string;
      description?: string;
      startDate: string;
      startTime?: string;
      endDate?: string;
      endTime?: string;
      location?: string;
      recurrence?: string;
      options: ('Apple' | 'Google' | 'iCal' | 'Microsoft365' | 'MicrosoftTeams' | 'Outlook.com' | 'Yahoo')[];
      timeZone?: string;
      timeZoneOffset?: string;
      iCalFileName?: string;
      trigger?: 'hover' | 'click';
      listStyle?: 'dropdown' | 'dropdown-static' | 'overlay' | 'modal';
      inline?: boolean;
      background?: boolean;
      icsFile?: string;
      style?: '3d' | 'flat' | 'round' | 'neumorphism' | 'none';
      size?: bigint;
      customLabels?: object;
      lightMode?: 'system' | 'dark' | 'light' | 'bodyScheme';
      language?: 'en' | 'de';
    },
    triggerElement?: HTMLElement,
    keyboardTrigger?: boolean
  ): void;
}
