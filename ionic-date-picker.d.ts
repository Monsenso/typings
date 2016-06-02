declare module ionic {

    namespace datepicker {

        interface IDatePicker {
            openDatePicker: ((config: ionic.datepicker.IConfig) => void);
        }

        interface IConfig {
            callback: ((val: number) => void);
            disabledDates: Date[];
            from: Date;
            to: Date;
            dateFormat: string;
            monthsList: string[];
            weeksList: string[];
            closeLabel: string;
            inputDate: Date;
            mondayFirst: boolean;
            closeOnSelect: boolean;
            templateType: string;
        }
    }
}
