#include "led.h" 

void LED_Init(void)
{    	 
  GPIO_InitTypeDef  GPIO_InitStructure;
  LED0_RCC_ENABLE();

  GPIO_InitStructure.GPIO_Pin = LED0_PIN;
  GPIO_InitStructure.GPIO_Mode = GPIO_Mode_OUT;//��ͨ���ģʽ
  GPIO_InitStructure.GPIO_OType = GPIO_OType_PP;//�������
  GPIO_InitStructure.GPIO_Speed = GPIO_Speed_100MHz;//100MHz
  GPIO_InitStructure.GPIO_PuPd = GPIO_PuPd_UP;//����
  GPIO_Init(LED0_PORT, &GPIO_InitStructure);//��ʼ��
  
  LED0_POWER_OFF();

}