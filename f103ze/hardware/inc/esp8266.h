#ifndef _ESP8266_H_
#define _ESP8266_H_

#define REV_OK		0	//接收完成标志
#define REV_WAIT	1	//接收未完成标志

void ESP8266_Init(void);
void ESP8266_Clear(void);
_Bool ESP8266_SendCmd(char *cmd, char *res);
void print_data_rece(void);

#endif
